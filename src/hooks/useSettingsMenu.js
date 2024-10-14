import { nodeMap } from "../utils/nodeMap";

const useSettingsMenu = (type, data) => {
    const nodeComponent = nodeMap[type];
    return nodeComponent.settingsContent(data);
};

export default useSettingsMenu;
