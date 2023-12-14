import { createPost } from "../../api/posts/create.mjs";
export async function createPostFormListener() {
    const form = document.querySelector("#createPostForm");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formElements = event.target;

        const title = document.querySelector('#title').value;
        const endsAt = document.querySelector('#endsAt').value;
        const body = document.querySelector('#body').value;
        const tags = document.querySelector('#tags').value;
        const media = document.querySelector('#media').value;


        const post = {
            title,
            endsAt,
            body,
            tags: [tags],
            media: [media]
        };

        try {
            const response = await createPost(post);
            // Post creation successful
            console.log("Post added successfully:", response);
            // window.location.reload();
           
        } catch (error) {
            console.log("Error creating post:", error);
            // Handle specific error cases and provide feedback to the user
        }
    });
}