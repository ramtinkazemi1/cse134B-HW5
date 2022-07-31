/*
*Ramtin Kazemi
*PID A16567965
*/

function removePost(event) {
    deletePost(event.target.parentElement.getAttribute('data-id'));
    event.target.parentElement.remove();
}
function selectPost(uuid) {
    const selectedBlog = generate();
    return selectedBlog[uuid];
}
function selectAllPosts() {
    return generate();
}
function updatePost(uuid, blog) {
    generate()[uuid] = blog;
    saveUp(generate());
}

function createPost(uuid, blog) {
    const blg = (document.getElementById('postDiv')).content.cloneNode(true);
    const container = blg.querySelector(`[class='tempDiv']`);
    container.setAttribute('data-id', uuid);
    const o = blg.getElementById('postH1');
    o.textContent = blog.title;
    const t = blg.getElementById('Date');
    t.textContent = blog.date;
    const th = blg.getElementById('Summary');
    th.textContent = blog.summary;
    const f = blg.getElementById('saveBtn');
    f.style.display = 'none';
    (document.getElementById('postSection')).appendChild(blg);
    return container;
}
function insertPost(blog) {
    const uuid = crypto.randomUUID();
    generate()[uuid] = blog;
    saveUp(generate());
    return uuid;
}
function deletePost(uuid) {
    const selectedBlog = generate();
    if (!(uuid in selectedBlog)) return false;
    delete selectedBlog[uuid];
    saveUp(selectedBlog);
    return true;
}
function generate() {
    return JSON.parse(localStorage.getItem('blogs')) || {};
}

function saveUp(blogs) {
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

function attachEventListeners(postElement) {
    postElement.querySelector(`#editBtn`).addEventListener('click', OnEditBlog);
    postElement.querySelector(`#deleteBtn`).addEventListener('click', removePost);
    postElement.querySelector(`#saveBtn`).addEventListener('click', OnSave);
}

function renderPost(uuid, blog) {
    let x = createPost(uuid, blog);
    attachEventListeners(x);
}

function OnEditBlog(event) {
    event.target.style.display = 'none';
    ((event.target.parentElement).querySelector(`#saveBtn`)).style.display = 'inline';
    const editedTitle = (event.target.parentElement).querySelector(`#postH1`);
    const editedDate = (event.target.parentElement).querySelector(`#Date`);
    const editedMsg = (event.target.parentElement).querySelector(`#Summary`);
    //this will enable editing the fields of the post
    editedTitle.contentEditable = true;
    editedDate.contentEditable = true;
    editedMsg.contentEditable = true;
}

document.addEventListener('DOMContentLoaded', (_ev) => {
    for (const [uuid, blog] of Object.entries(generate())) {
        renderPost(uuid, blog);
    }
    document.getElementById('BTN1').addEventListener('click', () => {
        document.getElementById('blogDialog').showModal();
    });
    document.getElementById('inputForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const blog = {};
        for (const [key,value] of (new FormData(event.target)).entries()) {
            blog[key] = value;
        }

        let uuid = insertPost(blog);
        document.getElementById('blogDialog').close();
        document.getElementById('inputForm').reset();
        renderPost(uuid, blog);
    });
});

