import {TagsContext, ThenTagsContext} from "./grammar/GherkinParser";
import {StepTags} from "./step-tags";


export function extractTags(tagsContext: TagsContext | undefined): StepTags {
    const tags = tagsContext?.TAG().map(tag => tag.text) ?? [];
    const isOnly = !!tagsContext?.ONLY_TAG().length;
    const isSkip = !!tagsContext?.SKIP_TAG().length;
    return {tags, isOnly, isSkip};
}

export function extractTestTags(tagsContext: ThenTagsContext | undefined): StepTags {
    const tags = tagsContext?.TAG().map(tag => tag.text) ?? [];
    const isOnly = !!tagsContext?.ONLY_TAG().length;
    const isSkip = !!tagsContext?.SKIP_TAG().length;
    const isTodo = !!tagsContext?.TODO_TAG().length;
    const isFail = !!tagsContext?.FAIL_TAG().length;
    return {tags, isOnly, isSkip, isTodo, isFail};
}
