
import Graph from "./path-between-two-vertices";

describe('path-between-two-vertices', () => {

    // Driver code
    const graph = new Graph(4);
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 2);
    graph.addEdge(2, 0);
    graph.addEdge(2, 3);
    graph.addEdge(3, 3);
    //graph.isReachable(u, v)
    test("path-between-two-vertices", () => {
        expect(graph.isReachable(1, 3)).toBe(true);
    });

});