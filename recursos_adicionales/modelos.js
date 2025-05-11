const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db'); // ajusta la ruta según tu proyecto

const Genre = sequelize.define('Genre', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
}, {
  tableName: 'genres',
  timestamps: false,
});

const Artist = sequelize.define('Artist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  genre_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Genre,
      key: 'id',
    },
  },
  picture_url: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'artists',
  timestamps: false,
});

const Album = sequelize.define('Album', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  release_year: {
    type: DataTypes.INTEGER,
  },
  genre_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Genre,
      key: 'id',
    },
  },
  cover_url: {
    type: DataTypes.STRING,
  },
  artist_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Artist,
      key: 'id',
    },
  },
}, {
  tableName: 'albums',
  timestamps: false,
});

const Song = sequelize.define('Song', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  n_track: {
    type: DataTypes.INTEGER,
  },
  album_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Album,
      key: 'id',
    },
  },
}, {
  tableName: 'songs',
  timestamps: false,
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  nickname: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  mail: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

const AlbumUser = sequelize.define('AlbumUser', {
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    primaryKey: true,
  },
  album_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Album,
      key: 'id',
    },
    primaryKey: true,
  },
  rank_date: {
    type: DataTypes.DATE,
  },
  rank_state: {
    type: DataTypes.ENUM('like', 'neutral', 'dislike'),
  },
  review: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'album_user',
  timestamps: false,
});

const SongUser = sequelize.define('SongUser', {
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    primaryKey: true,
  },
  song_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Song,
      key: 'id',
    },
    primaryKey: true,
  },
  score: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'song_user',
  timestamps: false,
});

// Relaciones
Genre.hasMany(Artist, { foreignKey: 'genre_id' });
Artist.belongsTo(Genre, { foreignKey: 'genre_id' });

Genre.hasMany(Album, { foreignKey: 'genre_id' });
Album.belongsTo(Genre, { foreignKey: 'genre_id' });

Artist.hasMany(Album, { foreignKey: 'artist_id' });
Album.belongsTo(Artist, { foreignKey: 'artist_id' });

Album.hasMany(Song, { foreignKey: 'album_id' });
Song.belongsTo(Album, { foreignKey: 'album_id' });

User.hasMany(AlbumUser, { foreignKey: 'user_id' });
AlbumUser.belongsTo(User, { foreignKey: 'user_id' });

Album.hasMany(AlbumUser, { foreignKey: 'album_id' });
AlbumUser.belongsTo(Album, { foreignKey: 'album_id' });

User.hasMany(SongUser, { foreignKey: 'user_id' });
SongUser.belongsTo(User, { foreignKey: 'user_id' });

Song.hasMany(SongUser, { foreignKey: 'song_id' });
SongUser.belongsTo(Song, { foreignKey: 'song_id' });

module.exports = {
  Genre,
  Artist,
  Album,
  Song,
  User,
  AlbumUser,
  SongUser,
};
