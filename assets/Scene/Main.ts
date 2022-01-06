
import { _decorator, Component, Node, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Main
 * DateTime = Wed Dec 29 2021 23:46:02 GMT+0800 (中国标准时间)
 * Author = 卡卡马桶
 * FileBasename = Main.ts
 * FileBasenameNoExtension = Main
 * URL = db://assets/Scene/Main.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('Main')
export class Main extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
        console.log("hello word")
        console.log("test")
    }

    onClickBg(event:EventTouch, msg:string){
        console.log("onClickBg")
        console.log(event)
        console.log(msg)
        var target = event.target
        if (target) {
            console.log(target)
            console.log(target.name)
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
