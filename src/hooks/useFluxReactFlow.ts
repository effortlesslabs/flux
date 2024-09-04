import { useEdgesState, useNodesState, ReactFlowInstance } from "reactflow";
import { useCallback, useState } from "react";
import { useFluxTreesStore, FluxTree } from "../zustand/trees";
import { generateNodeId } from "../utils/nodeId";

function parseInitialsNodesFromTrees(trees: FluxTree[]) {
  return [];
}

function parseInitialsEdgesFromTrees(trees: FluxTree[]) {
  return [];
}

function useFluxReactFlow() {
  const [reactFlow, setReactFlow] = useState<ReactFlowInstance | null>(null);
  const { trees } = useFluxTreesStore();

  const initialsNodes = parseInitialsNodesFromTrees(trees);
  const initialsEdges = parseInitialsEdgesFromTrees(trees);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialsNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialsEdges);

  const addNode = useCallback(() => {
    const userNodeId = generateNodeId();
  }, []);

  const addSystemNode = useCallback(() => {
    const systemNodeId = generateNodeId();
  }, []);

  return {
    edges,
    nodes,
    setEdges,
    onEdgesChange,
    reactFlow,
    setNodes,
    onNodesChange,
    setReactFlow,
  };
}

export default useFluxReactFlow;
