import SidebarItem from "./SidebarItem";

const nodes = [
    {
        id: "1",
        data: {
            label: "Message",
            text: "Didn't quite understand your answer or question, so I suggest you start the transfer process over again",
        },
    },
    { id: "2", data: { label: "Pause", text: "Delay of 3 seconds" } },
    { id: "3", data: { label: "Chain", text: "Start another chain" } },
];

const Sidebar = ({}) => {
    const onDragStart = (e, node) => {
        e.dataTransfer.setData("application/reactflow", JSON.stringify(node));
        e.dataTransfer.effectAllowed = "move";
    };

    const renderNodeList = (nodes) =>
        nodes.map((node) => <SidebarItem key={node.id} node={node} onDragStart={onDragStart} />);

    const elements = renderNodeList(nodes);
    return elements;
};

export default Sidebar;
