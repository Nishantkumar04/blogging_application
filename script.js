// document.addEventListener('DOMContentLoaded', function() {
//     const submitButton = document.getElementById('submit-post');
//     submitButton.addEventListener('click', function() {
//         const title = document.getElementById('post-title').value;
//         const content = document.getElementById('post-content').value;
//         if (title && content) {
//             addPost(title, content);
//         } else {
//             alert('Please enter both title and content for the post.');
//         }
//     });

//     function addPost(title, content) {
//         const postContainer = document.getElementById('blog-posts');
//         const postDiv = document.createElement('div');
//         postDiv.classList.add('post');
//         const titleElement = document.createElement('h3');
//         titleElement.textContent = title;
//         const contentElement = document.createElement('p');
//         contentElement.textContent = content;
//         postDiv.appendChild(titleElement);
//         postDiv.appendChild(contentElement);
//         postContainer.appendChild(postDiv);
//     }
// });
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-post');
    submitButton.addEventListener('click', function() {
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        if (title && content) {
            addPost(title, content);
            showAlert(title, content);
        } else {
            alert('Please enter both title and content for the post.');
        }
    });

    function addPost(title, content) {
        const postContainer = document.getElementById('blog-posts');
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        const contentElement = document.createElement('p');
        contentElement.textContent = content;
        postDiv.appendChild(titleElement);
        postDiv.appendChild(contentElement);
        postContainer.appendChild(postDiv);
    }

    function showAlert(title, content) {
        alert(`Post submitted successfully!\nTitle: ${title}\nContent: ${content}`);
    }
});
