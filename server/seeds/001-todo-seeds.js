exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').truncate()
  await knex('todos').insert([
    {
      message: "walk the dog",
      completed: true
  },
  {
      message: "wash dishes",
      completed: false
  },
  {
      message: "do laundry",
      completed: true
  },
  {
      message: "call grandma",
      completed: false
  }
  ]);
};
