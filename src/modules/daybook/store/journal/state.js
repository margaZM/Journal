// Donde se está almacenando la información y es rectaivo

export default () => ({
  isLoading: true,
  entries: [
  {
    id: new Date().getTime(),
    date: new Date().toDateString(),
    text: 'Facere, cumque nisi odio similique magni fugiat aut. Facere dolores quis, ducimus ab perspiciatis explicabo velit.',
    picture: null
  },
  {
    id: new Date().getTime() * 100,
    date: new Date().toDateString(),
    text: 'Mollitia assumenda expedita, dolore ut, error deleniti distinctio sunt praesentium tempore accusantium, fugit quibusdam vero eum placeat voluptate.',
    picture: null
  },
  {
    id: new Date().getTime() * 200,
    date: new Date().toDateString(),
    text: 'Doloremque consectetur voluptates perferendis, amet consectetur adipisicing elit. Modi optio tempora asperiores odio unde.',
    picture: null
  },


]
})
