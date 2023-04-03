
import Graph from "./path-between-two-vertices";

describe('path-between-two-vertices', () => {

    // Driver code
    const graph = new Graph(4);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(1, 4);
    graph.computePaths();
    //graph.isReachable(u, v)
    test("path-between-two-vertices", () => {
        expect(graph.isReachable(4, 3)).toBe(true);
    });

});