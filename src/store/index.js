import { createStore } from 'vuex'
let indice = 0;
export default createStore({
  state: {
    characters:[],
    charactersFilter:[]
  },
  mutations: {
    setCharacters(state,payload){
      state.characters = payload
    },
    setCharactersFilter(state,payload){
      state.charactersFilter = payload
    }
  },
  actions: {
    
    async getCharacters({commit}){
      try{
      
        const response = await fetch('https://rickandmortyapi.com/api/character?page='+indice+'')
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)

      } catch(error){
        console.error(error)
      }
    },
    filterByStatus({commit,state},status){
      const results = state.characters.filter((character)=>{
        return character.status.includes(status)
      })
      commit('setCharactersFilter', results)
    },
    filterByName({commit,state},name){
      const formatName = name.toLowerCase()
      const results = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase()

        if(characterName.includes(formatName)){
          return character
        }
      })
      commit('setCharactersFilter', results)
    },
    nextPage({commit}){
     
        indice++;
       
        axios.get('https://rickandmortyapi.com/api/character?page='+ indice + '' , {
                responseType: 'json'
            })
            .then(function(res) {
                if (res.status == 200) {
                                                                     
                  commit('setCharacters', res.data.results)
                  commit('setCharactersFilter', res.data.results)
                 
                    
                }
                console.log(res.data.info.prev)
               
            })
            .catch(function(err) {
                console.log(err);
            })
          
    },
    
    previousPage({commit}){
      
        indice--;
       
        axios.get('https://rickandmortyapi.com/api/character?page='+ indice + '' , {
                responseType: 'json'
            })
            .then(function(res) {
                if (res.status == 200) {
                                                                     
                  commit('setCharacters', res.data.results)
                  commit('setCharactersFilter', res.data.results)
                 
             
                }

                console.log(res.data.info.next)
                
            })
            .catch(function(err) {
                console.log(err);
            })
          
    },
    

  
  },
  modules: {
  }
})
