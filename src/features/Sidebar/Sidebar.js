import { nodes } from "../../utils/nodes";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
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
