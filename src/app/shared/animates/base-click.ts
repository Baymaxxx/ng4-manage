/*
 * @describe:创建一个基础的动画
 */
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

// 定义一个鼠标点击运动的动画
export const boxAnimate = trigger('box', [
    // 定义一个状态left
    state('left', style({ 'background-color': '#360', transform: 'translate3d(0,0,0)' })),
    // 定义另外一个状态right
    state('right', style({ 'background-color': '#630', transform: 'translate3d(500px,0,0)' })),
    // 定义运动过程(从left到right状态)
    transition('left=>right', animate(5000, keyframes([
        style({ transform: 'translate3d(10%,0,0)' }),
        style({ transform: 'translate3d(20%,0,0)' }),
        style({ transform: 'translate3d(40%,0,0)' }),
        style({ transform: 'translate3d(50%,0,0)' }),
        style({ transform: 'translate3d(60%,0,0)' }),
        style({ transform: 'translate3d(70%,0,0)' }),
        style({ transform: 'translate3d(80%,0,0)' }),
        style({ transform: 'translate3d(90%,0,0)' }),
        style({ transform: 'translate3d(100%,0,0)' }),
    ]))),
    // 定义运动过程(从right到left)
    transition('right=>left', animate(5000, keyframes([
        style({ transform: 'translate3d(100%,0,0)' }),
        style({ transform: 'translate3d(80%,0,0)' }),
        style({ transform: 'translate3d(70%,0,0)' }),
        style({ transform: 'translate3d(40%,0,0)' }),
        style({ transform: 'translate3d(30%,0,0)' }),
        style({ transform: 'translate3d(0%,0,0)' })
    ]))),
]);

// 定义一个鼠标移上去的动画
export const boxAnimateHover = trigger('boxHover', [
    // 定义一个状态,正常状态
    state('out', style({ transform: 'scale(1)', 'box-shadow': 'none' })),
    // 定义一个状态,鼠标移上去
    state('in', style({ transform: 'scale(1.1)', 'box-shadow': '3px 3px 5px 6px #ccc' })),
    // 定义运动过程
    transition('out=>in', animate('200ms ease-in')),
    transition('in=>out', animate('200ms ease-out'))
]);
