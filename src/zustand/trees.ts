import { create } from "zustand";

interface FluxEdge {
  id: number;
  name: string;
  startKey: string;
  endKey: string;
  xAxis: string;
  yAxis: string;
}

interface FluxNode {
  id: number;
  key: string;
  name: string;
  xAxis: string;
  yAxis: string;
}

export interface FluxTree {
  id: number;
  name: string;
  xAxis: string;
  yAxis: string;
  nodes: FluxNode[];
  edges: FluxEdge[];
}

interface FluxTreesState {
  trees: FluxTree[];
  addTree: (tree: FluxTree) => void;
  addNode: (node: FluxNode) => void;
  addEdge: (edge: FluxEdge) => void;
}

export const useFluxTreesStore = create<FluxTreesState>((set) => ({
  trees: [],
  addTree: (tree) => set((state) => ({ trees: [...state.trees, tree] })),
  addNode: (node) =>
    set((state) => {
      const tree = state.trees.find((tree) => tree.id === node.id);
      if (tree) {
        tree.nodes.push(node);
      }
      return state;
    }),
  addEdge: (edge) =>
    set((state) => {
      const tree = state.trees.find((tree) => tree.id === edge.id);
      if (tree) {
        tree.edges.push(edge);
      }
      return state;
    }),
}));
