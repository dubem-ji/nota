const notes = [
    {
        id: 1,
        title: 'The Road Not Taken',
        body: {
            value: <><p><span style={{color: 'rgb(255, 0, 0)'}}>The code snippet can be used to get the first 10 words from a string.</span></p><ul><li>You can set </li><li>'getWordStr'</li></ul><p><strong>You can set start</strong></p></>
        },
        tags: ['poems', 'inspiration'],
        date: '2014-04-03',
        folder: 'personal'
    },
    {
        id: 2,
        title: 'Death be not proud',
        body: {
            value: <><p><span style={{color: 'rgb(255, 255, 0)'}}>The code snippet can be used to get the first 10 words from a string.</span></p><ul><li>You can set </li><li>'getWordStr'</li></ul><p><strong>You can set start</strong></p></>
        },
        tags: ['poems', 'dark'],
        date: '2015-05-03',
        folder: 'school'
    },
    {
        id: 3,
        title: 'Ozymandias',
        body: {
            value: <><p>The code snippet can be used to get the first 10 words from a string. You can set start and end points in the 'getWordStr' function. We have applied a start point from 0 and an endpoint to 10 The code snippet can be used to get the first 10 words from a string. You can set start and end points in the 'getWordStr' function. We have applied a start point from 0 and an endpoint to 10 The code snippet can be used to get the first 10 words from a string. You can set start and end points in the 'getWordStr' function. We have applied a start point from 0 and an endpoint to 10</p>
          <p><em>fgdfhghg</em></p></>
        },
        tags: ['poems', 'dark'],
        date: '2015-08-13',
        folder: 'school'
    },
];


const user = {
    name: 'John Doe',
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