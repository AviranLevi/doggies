class homeManager {
    constructor() {
          this.UserId = JSON.parse(sessionStorage.UserId)
          this.markerGeneral = []
          this.markerUser = []
    }

    // async getEvents(gardenName){
    //    let gardens = await $.get(`/events/${gardenName}`)
    //     this.markerFromDB = []
    //     this.markerFromDB.push(...gardens)
    //  }

    async addEvent(event){
       await $.post(`/event` , event)
    }

    async getGaedens(){
        let gardens =  await $.get(`/allgardens`)
        this.markerGeneral = []
        gardens.forEach(g => {
            let exist = false
            this.markerUser.forEach(e => {
                if (e.id == g.id)
                {
                    exist = true
                }
            })
            if (!exist)
            {
                this.markerGeneral.push(g)
            }
        })
    }

    async joinCommunity(){

    }

    async addUserGardens(UserGardens){
        this.markerUser = []
        this.markerUser.push(...UserGardens)
    }

    async getUserGardens(){
        return $.get(`/user/${this.UserId}`)
    }
}