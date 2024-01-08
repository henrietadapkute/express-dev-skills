const skills = [
    {id: 123456, skill: 'Node.js', level: false},
    {id: 123457, skill: 'Express', level: true},
    {id: 123458, skill: 'JavaScript', level: true},
    {id: 123459, skill: 'HTML', level: true},
    {id: 123460, skill: 'CSS', level: true},
    {id: 123461, skill: 'Python', level: false},
    {id: 123462, skill: 'Vue', level: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  id = parseInt(id)
  // Find the index for the todo
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

  function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }