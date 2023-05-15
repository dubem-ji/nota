const notes = [
    {
        id: 1,
        title: 'The Road Not Taken',
        body: "The Road Not Taken is likely Frost's most popular poem. He uses language that is easy to understand and relate to. His poem is about a fork in the road in a speaker's life and his choice to take one particular path. The melancholic but beautiful language makes memorizing this poem a pleasure",
        tags: ['poems', 'inspiration'],
        date: '2014-04-03',
        folder: 'personal'
    },
    {
        id: 2,
        title: 'Death be not proud',
        body: "This poem is also known as 'Holy Sonnet 10'. In it, John personifies death and depicts “him” as something that we should not be afraid of. Here are the first two lines of the poem",
        tags: ['poems', 'dark'],
        date: '2015-05-03',
        folder: 'school'
    },
    {
        id: 3,
        title: 'Ozymandias',
        body: "In the opinion of some, this is Shelley's best short poem. In it, he describing meting a trailer form “an antique land,” likely Egypt. He describes visiting that land and seeing the half-buried statue of a great leader. At only fourteen lines, 'Ozymandias' is easy to memorize. Here are the first lines",
        tags: ['poems', 'dark'],
        date: '2015-08-13',
        folder: 'school'
    },
];


const user = {
    name: 'John Doe',
    email: 'john@gmail.com',
    password: 'john123',
    avatar: '',
    folders: [
        {
            id: 1,
            name: 'personal',
            color: 'red',
        },
        {
            id: 1,
            name: 'school',
            color: 'blue',
        }
    ],
    tag: ['poems', 'house', 'inspiration']
}

export { notes, user };