import FilterNode from "../nodeTypes/filterNode";
import MessageNode from "../nodeTypes/messageNode";
import PauseNode from "../nodeTypes/pauseNode";
import MessageSettings from "../settingsTypes/messageSettings";
import PauseSettings from "../settingsTypes/pauseSettings";
import FilterSettings from "../settingsTypes/filterSettings";

export const nodeMap = {
    Message: { nodeContent: MessageNode, settingsContent: MessageSettings },
    Filter: { nodeContent: FilterNode, settingsContent: FilterSettings },
    Pause: { nodeContent: PauseNode, settingsContent: PauseSettings },
};
