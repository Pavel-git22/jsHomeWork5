/* Задание 1
Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,
}
*/

// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// }

// for (var i of Object.keys(numbers)) {
//     console.log(numbers[i]);
// }

/*

Задание 2
Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
author: "John", // вывести этот текст
postId: 23,
comments: [
{
userId: 10,
userName: "Alex",
text: "lorem ipsum",
rating: {
likes: 10,
dislikes: 2, // вывести это число
},
},
{
userId: 5, // вывести это число
userName: "Jane",
text: "lorem ipsum 2", // вывести этот текст
rating: {
likes: 3,
dislikes: 1,
},
},
],
};
*/

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};


for (var i of Object.keys(post)) {
    if (i === "author") {
        console.log(post[i]);
    }

    if ((typeof (post[i])) === "object") {

        let post_keys = post[i];
        for (var j of Object.keys(post_keys)) {
            if (j === "userId") {
                console.log(post_keys[j]);
            }
            console.log(post_keys[j]);

            let post_key2 = post_keys[j];

            if ((typeof (post_keys[j])) === "object") {
                let post_key2 = post_keys[j];
                for (let k of Object.keys(post_key2)) {
                    if ((typeof (post_key2[k])) === "object") {
                        console.log(post_key2[k]);
                    }
                }
            }
        };

    }
}
