const ITEMS_DATA = [
  {
    title: 'Transaction:0x2eca49829d31c96145bf61be18a03ef082a70bf5bc5fe722e4050f2f048af6bf',
     title1: 'Activity:Receive',
      title2: 'Delivery Address : Ahventie 24 ',
       title3: 'Delivery Time : 25-11-2017',
       title4: 'Curren Location :  Helsinki',

    description: 'Travel wit style and comfort',
  },
  {
    title: 'Transactio:0x41d2cbbb19b23f389ba1ca4bdc1f6080311d447f951fdb28016f37b0c3a23f3a',
    title1: 'Activity:Receive',
     title2: 'Delivery Address : laivurinkatu 3',
       title3: 'Delivery Time : 11-12-2017',
       title4: 'Curren Location :  Porvoo',
    description: 'Travel wit more style and comfort',
  },
  {
    title: 'Transaction:0x44f4b0574ed70cd140f1b7fa46946a27dc0b5e6a360088cb78ab0e31f43ecbe6',
    title1: 'Activity:Receive',
     title2: 'Delivery Address : Lintuvaara 44',
       title3: 'Delivery Time : 06-12-2017',
       title4: 'Curren Location :  Vaasa',
    description: 'helps you become less hungry',
  }
];

const initialState = {
  items: []
}

function items(state = initialState, action) {
  switch(action.type) {
    case 'SET_ITEM_INFO':
      const items = [ ...state.items ];
      items[action.itemIndex] = {
        ...ITEMS_DATA[action.itemIndex % 3],
        ...items[action.itemIndex],
        ...action.itemInfo
      };
      return { items };
    default:
      return state;
  }
}

export default items;
