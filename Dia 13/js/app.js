var tagsEl = document.getElementById("tags");
var textarea = document.getElementById("textarea");
textarea.focus();
textarea.addEventListener("keyup", function (e) {
    createTags(e.target);
    if (e.key === "Enter") {
        setTimeout(function () {
            e.target.value = '';
        }, 10);
        randomSelect();
    }
});
function createTags(input) {
    var tags = input.value
        .split(",")
        .filter(function (tag) { return tag.trim() !== ""; })
        .map(function (tag) { return tag.trim(); });
    tagsEl.innerHTML = "";
    tags.forEach(function (tag) {
        var tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerHTML = tag;
        tagsEl.appendChild(tagEl);
    });
}
function randomSelect() {
    var times = 30;
    var interval = setInterval(function () {
        var randomTag = pickRandomTag();
        if (randomTag !== undefined) {
            highlightTag(randomTag);
            setTimeout(function () {
                unHighlightTag(randomTag);
            }, 100);
        }
    }, 100);
    setTimeout(function () {
        clearInterval(interval);
        setTimeout(function () {
            var randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, times * 1000);
}
function pickRandomTag() {
    var tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}
function highlightTag(tag) {
    tag.classList.add('highlight');
}
function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}
