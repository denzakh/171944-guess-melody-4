export default [
  {
    type: `genre`,
    genre: `rock`,
    question: `Выберите инди-рок треки`,
    answers: [
      {
        genre: `rock`,
        src: `https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_04_-_Upbeat_Party.mp3`
      },
      {
        genre: `blues`,
        src: `https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Checkie_Brown/hey/Checkie_Brown_-_09_-_Mary_Roose_CB_36.mp3`
      },
      {
        genre: `jazz`,
        src: `https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Unheard_Music_Concepts/The_Lasso_of_Time/Unheard_Music_Concepts_-_24_-_Cosmic_Relevance.mp3`
      },
      {
        genre: `rock`,
        src: `https://files.freemusicarchive.org/storage-freemusicarchive-org/music/West_Cortez_Records/David_Hilowitz/Gradual_Sunrise/David_Hilowitz_-_Gradual_Sunrise.mp3`
      }
    ]
  },
  {
    type: `artist`,
    question: `Кто исполняет эту песню?`,
    song: {
      artist: `Jim Beam`,
      src: ``
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `Пелагея`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Краснознаменная дивизия имени моей бабушки`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Lorde`
      }
    ]
  }
];
