// post
class BlogPost {
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date(); 
    }
}

// user or users
class BlogUser {
    constructor(username, fullName) {
        this.username = username;
        this.fullName = fullName;
        this.posts = []; 
    }

    // create a new post
    createPost(title, content) {
        const post = new BlogPost(title, content, this.fullName);
        this.posts.push(post);
    }

    // edit existing post 
    editPost(index, newTitle, newContent) {
        if (index >= 0 && index < this.posts.length) {
            const post = this.posts[index];
            post.title = newTitle;
            post.content = newContent;
        } else {
            console.log("Post not found.");
        }
    }

    // delete post
    deleteLastPost() {
        if (this.posts.length > 0) {
            this.posts.pop();
        } else {
            console.log("No posts to delete.");
        }
    }

    // display all posts
    displayPosts() {
        if (this.posts.length === 0) {
            console.log("No posts available.");
            return;
        }

        this.posts.forEach((post, index) => {
            console.log(`Post #${index + 1}`);
            console.log(`Title: ${post.title}`);
            console.log(`Content: ${post.content}`);
            console.log(`Author: ${post.author}`);
            console.log(`Created At: ${post.createdAt}`);
            console.log('---');
        });
    }
}

// Execution
const Bryden = new BlogUser('bryden', 'Bryden Ramruka');
const Urisha = new BlogUser('urisha', 'Urisha Nankoo'); 

Bryden.createPost('First Post', 'This is my first post.');
Bryden.createPost('Second Post', 'This is the second post.');

Urisha.createPost('Urisha\'s First Post', 'Content of Urisha\'s first post.');

console.log('Bryden\'s Posts:');
Bryden.displayPosts();

console.log('Urisha\'s Posts:');
Urisha.displayPosts();

Bryden.editPost(0, 'Updated First Post', 'Updated my first post.');

console.log('Bryden\'s Posts After Editing:');
Bryden.displayPosts();

Bryden.deleteLastPost();

console.log('Bryden\'s Posts After Deleting:');
Bryden.displayPosts();
