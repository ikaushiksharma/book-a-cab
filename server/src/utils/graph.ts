export function createGraph(edges) {
  const graph = {};

  edges.forEach((edge) => {
    if (!graph[edge.source]) {
      graph[edge.source] = [];
    }

    if (!graph[edge.destination]) {
      graph[edge.destination] = [];
    }

    graph[edge.source].push({
      node: edge.destination,
      weight: edge.timeInMinutes,
    });
    graph[edge.destination].push({
      node: edge.source,
      weight: edge.timeInMinutes,
    }); // Since the graph is undirected
  });

  return graph;
}

export function dijkstra(graph, start) {
  const distances = {};
  const visited = {};
  const previousNodes = {};
  const nodes = Object.keys(graph);

  nodes.forEach((node) => {
    distances[node] = Infinity;
    previousNodes[node] = null;
  });

  distances[start] = 0;

  while (nodes.length) {
    const currentNode = nodes.reduce((minNode, node) => {
      if (distances[node] < distances[minNode]) {
        return node;
      }
      return minNode;
    }, nodes[0]);

    const neighbors = graph[currentNode];

    nodes.splice(nodes.indexOf(currentNode), 1);
    visited[currentNode] = true;

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i].node;
      const weight = neighbors[i].weight;
      const tentativeDistance = distances[currentNode] + weight;

      if (tentativeDistance < distances[neighbor]) {
        distances[neighbor] = tentativeDistance;
        previousNodes[neighbor] = currentNode;
      }
    }
  }

  return distances;
}
