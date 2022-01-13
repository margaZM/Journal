// export const myGetter = ( state ) => {
//  return state.algo
// }

//Forma rapida de leer el state y traer la información como la necesito

export const getEntriesByTerm = ( state ) => ( term = '') => {

  if ( term.length ===0 ) return state.entries
  
  return state.entries.filter( entry => entry.text.toLowerCase().includes( term.toLowerCase()
))
}

// recibir id como argumento
export const getEntryById = ( state ) => ( id ) => {

  const entry = state.entries.find( entry => entry.id === id)

  if( !entry ) return 

  return {...entry} //TODO: Probar
}