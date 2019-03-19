
exports.seed = function(knex, Promise) {
  return knex('monkeyIsland')
    .truncate()
    .then(function () {
      return knex('monkeyIsland').insert([
        {name: 'Guybrush Threepwood'},
        {name: 'LeChuck'},
        {name: 'Elaine Marley'}
      ]);
    });
};
