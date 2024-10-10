import React, { useCallback, useState } from "react";

import Sidebar from "./features/Sidebar/Sidebar";
import Node from "./components/Node";

import { Box } from "@mui/material";
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, useReactFlow } from "@xyflow/react";
import SettingsMenu from "./features/SettingsMenu/SettingsMenu";

const initialNodes = [];
const initialEdges = [];

const App = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [settingNode, setSettingNode] = useState(null);

    const [showSettingsMenu, setShowSettingsMenu] = useState(false);

    const { getViewport } = useReactFlow();

    const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
    const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    const onDrop = (e) => {
        e.preventDefault();
        const reactFlowBounds = e.target.getBoundingClientRect();
        const nodeData = e.dataTransfer.getData("application/reactflow");

        if (!nodeData) {
            return;
        }

        const node = JSON.parse(nodeData);

        const { x: scaleX, y: scaleY, zoom } = getViewport();

        const position = {
            x: (e.clientX - reactFlowBounds.left - scaleX) / zoom,
            y: (e.clientY - reactFlowBounds.top - scaleY) / zoom,
        };

        const id = `${nodes.length + 1}`;

        const newNode = {
            id,
            data: { label: node.data.label, text: node.data.text },
            position,
            type: "custom",
        };

        setNodes((nds) => [...nds, newNode]);
    };

    const onDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    const handleNodeClick = (e, node) => {
        setShowSettingsMenu(true);
        setSettingNode(node);
    };

    const handleCloseSettingMenu = () => {
        setShowSettingsMenu(false);
        setSettingNode(null);
    };

    return (
        <Box display="flex" height="100vh" width="100%">
            <Box bgcolor="#f0f0f0" padding={1}>
                <Sidebar />
            </Box>
            <Box flexGrow={1} bgcolor="#ffffff" padding={2} onDrop={onDrop} onDragOver={onDragOver}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onEdgesChange={onEdgesChange}
                    onNodesChange={onNodesChange}
                    onConnect={onConnect}
                    onNodeClick={handleNodeClick}
                    nodeOrigin={[0.5, 0.5]}
                    nodeTypes={{ custom: Node }}
                    className="reactFlow"></ReactFlow>
            </Box>

            {showSettingsMenu && <SettingsMenu node={settingNode} onClose={handleCloseSettingMenu} />}
        </Box>
    );
};

export default App;
