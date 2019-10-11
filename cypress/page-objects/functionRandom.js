import Chance from "chance";
class RandomForTests {
     randomUrls(countOfUrls){
        let arr = [];
         for( let i = 0; i < countOfUrls; i++){
             arr[i] = {
                 name: Chance().string({length: 100}),
                 wrapped: Chance().string({length: 100})
             };
         }
        return arr;
    }
     randomTags(countOfTags){
        let arr1 = [];
        for( let i = 0; i < countOfTags; i++){
            arr1[i] = {
                id: Chance().integer({min: 0, max: 100}),
                name: Chance().string({length: 100})
            };
        }
        return arr1;
    }
}
export default new RandomForTests()
