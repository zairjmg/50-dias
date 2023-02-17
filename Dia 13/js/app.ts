const tagsEl = document.getElementById("tags") as HTMLElement;
const textarea = document.getElementById("textarea") as HTMLTextAreaElement;

textarea.focus();

textarea.addEventListener("keyup", (e: KeyboardEvent) => {
    createTags(e.target as HTMLTextAreaElement);

    if (e.key === "Enter") {
        setTimeout(() => {
            e.target!.value = ''
        }, 10);
        randomSelect();
    }
});

function createTags(input: HTMLTextAreaElement) {
    const tags = input.value
        .split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim())

    tagsEl.innerHTML = "";

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
    });
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        if (randomTag !== undefined) {
            highlightTag(randomTag)

            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100)
        }
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)
    }, times * 1000)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag: Element) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag: Element) {
    tag.classList.remove('highlight')
}


