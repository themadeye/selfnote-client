import NoteService from '../services/NoteDataService';

class ServiceRoute{
  route(module, actionToken,data){
    switch(module) {
      case 1:
        if(actionToken == "add"){

          return NoteService.AddNote(data['major'], data)

        } else if(actionToken == "delete"){

          return NoteService.DeleteNote(data['major'], data)
          
        }
        break;
      case 2:
        // code block
        break;
      default:
        // code block
    }
  }
}
  export default new ServiceRoute();