// vanilla javascript
const postInput = document.getElementById('post');

const username = prompt('Pick a username: ')
//const posts = ['blah blah' , 'hahaha' , 'nahnahnah']



const posts = [
    {
        username: 'zuckerberg',
        caption: 'blah blah',
        likeCount: 0

},
    {
        username: 'zuckerberg',
        caption: 'hahahaha',
        likeCount: 0
    },
    {
        username: 'zuckerberg',
        caption: 'nannana',
        likeCount: 0
    },

    ]



// jQuery
$('#post')


//Showing all posts
function showPosts() {
    for(let i = 0; i < posts.length; i++) {
        $('.feed').prepend(`
        <div class="post">
                <h4>${posts[i].username}</h4>
                <p>${posts[i].caption}</p>
                <p class="likes">${posts[i].likeCount} Likes</p>
                <button class="like-button" id=${i}>Like</button>
                <button>Comment</button>
                <button>Share</button>

                `);
    }
    $('.like-button').click(function(e)  {
        console.log(e.target.id);
        posts[e.target.id].likeCount++;

        $('.feed').empty();
        showPosts();
        
    })
}




showPosts();


// Submit new posts


$('#post-submit').click(function(e) {
    e.preventDefault();

    const postText = $('#post').val();


    const newPost = {
        username: username,
        caption: postText,
        likeCount: 0
    }

    //Push post object into your array
    posts.push(newPost);

    $('#post').val('');
    
    //Select feed container and empty with empty method .empty
    $('.feed').empty();
    

    //Loop through all items again
    showPosts();

})