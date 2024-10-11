import { useCallback, useState } from "react";

import Sidebar from "./features/Sidebar/Sidebar";
import Node from "./components/Node";

import { Box } from "@mui/material";
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, useReactFlow } from "@xyflow/react";
import SettingsMenu from "./features/SettingsMenu/SettingsMenu";
import { v4 as uuidv4 } from "uuid";

const initialNodes = [];
const initialEdges = [];

const nodeTypes = { custom: Node };

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

        const newNode = {
            id: uuidv4(),
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

    const handleUpdateNodeText = (nodeId, newText) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === nodeId) {
                    const updatedNode = {
                        ...node,
                        data: {
                            ...node.data,
                            text: newText,
                        },
                    };

                    return updatedNode;
                }
                return node;
            })
        );
    };

    // Add button to node
    const handleAddButtonToNode = (nodeId, buttonText) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === nodeId) {
                    const newButton = {
                        id: uuidv4(),
                        text: buttonText,
                    };
                    const updatedNode = {
                        ...node,
                        data: {
                            ...node.data,
                            buttons: [...(node.data.buttons || []), newButton],
                        },
                    };

                    if (settingNode && settingNode.id === nodeId) {
                        setSettingNode(updatedNode);
                    }

                    return updatedNode;
                }
                return node;
            })
        );
    };

    const handleUpdateButton = (nodeId, btnId, newText) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === nodeId) {
                    const updatedNode = {
                        ...node,
                        data: {
                            ...node.data,
                            buttons: node.data.buttons.map((btn) =>
                                btn.id === btnId ? { ...btn, text: newText } : btn
                            ),
                        },
                    };

                    if (settingNode && settingNode.id === nodeId) {
                        setSettingNode(updatedNode);
                    }

                    return updatedNode;
                }

                return node;
            })
        );
    };

    const handleDeleteButton = (nodeId, btnId) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === nodeId) {
                    const updatedNode = {
                        ...node,
                        data: {
                            ...node.data,
                            buttons: node.data.buttons.filter((btn) => btn.id !== btnId),
                        },
                    };

                    if (settingNode && settingNode.id === nodeId) {
                        setSettingNode(updatedNode);
                    }

                    return updatedNode;
                }
                return node;
            })
        );
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
                    nodeTypes={nodeTypes}
                    className="reactFlow"></ReactFlow>
            </Box>

            {showSettingsMenu && (
                <SettingsMenu
                    node={settingNode}
                    onClose={handleCloseSettingMenu}
                    onUpdateNodeText={handleUpdateNodeText}
                    onAddButtonToNode={handleAddButtonToNode}
                    onUpdateButton={handleUpdateButton}
                    onDeleteButton={handleDeleteButton}
                />
            )}
        </Box>
    );
};

export default App;
