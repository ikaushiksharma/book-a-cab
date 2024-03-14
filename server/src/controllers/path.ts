import { Request, Response } from 'express';
import Path from '../models/path';
import { Graph, print } from '../utils';

export async function calculateShortestTime(
  source: string,
  destination: string
) {
  if (!source || !destination) {
    return { error: 'Source and destination are required.' };
  }

  if (source === destination) {
    return { time: 0 };
  }

  try {
    const allPaths = await Path.find();
    const graph = Graph.createGraph(allPaths);

    if (!(source in graph)) {
      return { error: 'Source not present' };
    }

    if (!(destination in graph)) {
      return { error: 'Destination not present' };
    }

    const distances = Graph.dijkstra(graph, source);
    const shortestTime = distances[destination];

    if (!shortestTime) {
      return { error: 'No path found' };
    }

    return { time: shortestTime };
  } catch (error) {
    return { error: 'An error occurred while calculating the shortest path.' };
  }
}

export const createPath = async (req: Request, res: Response) => {
  try {
    const { source, destination, timeInMinutes } = req.body;
    print.message([source, destination, timeInMinutes]);
    const path = await Path.create({ source, destination, timeInMinutes });
    res.status(201).json(path);
  } catch (error) {
    print.error(error);
    res.status(500).json({ error: 'Could not create path.' });
  }
};

export const shortestPath = async (req: Request, res: Response) => {
  try {
    const { source, destination } = req.body;
    if (!source || !destination) {
      return res
        .status(400)
        .json({ error: 'Source and destination are required' });
    }

    const shortestTime = await calculateShortestTime(source, destination);

    if (shortestTime.error) {
      return res.status(404).json({ error: shortestTime.error });
    }
    if (shortestTime === null) {
      return res.status(404).json({ error: 'No path found' });
    }

    return res.status(200).json(shortestTime);
  } catch (error) {
    console.error('Error calculating shortest time', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllPaths = async (req: Request, res: Response) => {
  try {
    const paths = await Path.find();

    res.status(200).json(paths);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve paths.' });
  }
};
