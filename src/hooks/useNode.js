import FilterNode from "../nodeTypes/filterNode";
import MessageNode from "../nodeTypes/messageNode";
import PauseNode from "../nodeTypes/pauseNode";

const nodeMap = {
    Message: MessageNode,
    Filter: FilterNode,
    Pause: PauseNode,
};

const useNode = (type, data) => {
    const nodeComponent = nodeMap[type];
    return nodeComponent(data);
};

export default useNode;
