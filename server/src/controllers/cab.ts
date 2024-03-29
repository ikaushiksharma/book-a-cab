import { Request, Response } from 'express';
import Cab from '../models/cab';
import { print } from '../utils';

export const createCab = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    const cab = await Cab.create({ name, price });
    res.status(201).json(cab);
  } catch (error) {
    res.status(500).json({ error: 'Could not create a new cab.' });
  }
};

export const getAvailableCabs = async (req: Request, res: Response) => {
  try {
    const cabs = await Cab.find({
      $or: [
        { availableFrom: { $eq: null } },
        { availableFrom: { $lte: new Date() } },
      ],
    });
    const cabData = cabs.map((cab) => ({
      id: cab._id,
      name: cab.name,
      price: cab.price,
      image: cab.image,
    }));
    print.message(cabData);
    res.status(200).json(cabData);
  } catch (error) {
    print.error(error);
    res.status(500).json({ error: 'Could not retrieve available cabs.' });
  }
};

export const getAllCabs = async (req: Request, res: Response) => {
  try {
    const cabs = await Cab.find();
    res.status(200).json(cabs);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve cabs.' });
  }
};

export const getCabById = async (req: Request, res: Response) => {
  try {
    const cab = await Cab.findById(req.params.id);
    if (!cab) {
      return res.status(404).json({ error: 'Cab not found.' });
    }
    res.status(200).json(cab);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve the cab.' });
  }
};

export const updateCab = async (req: Request, res: Response) => {
  try {
    const updatedCab = await Cab.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedCab) {
      return res.status(404).json({ error: 'Cab not found.' });
    }
    res.status(200).json(updatedCab);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the cab.' });
  }
};

export const deleteCab = async (req: Request, res: Response) => {
  try {
    const deletedCab = await Cab.findByIdAndDelete(req.params.id);
    if (!deletedCab) {
      return res.status(404).json({ error: 'Cab not found.' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the cab.' });
  }
};
