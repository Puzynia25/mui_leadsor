import { nodeMap } from "../utils/nodeMap";

const useNode = (type, data) => {
    const nodeComponent = nodeMap[type];
    return nodeComponent.nodeContent(data);
};

export default useNode;
