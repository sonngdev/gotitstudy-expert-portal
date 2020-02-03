const initialState = [
  {
    type: 'reviser',
    avatar: 'asker',
    text: 'Please help me',
  },
  {
    type: 'system',
    avatar: 'gotit',
    text: 'GotIt! monitors chat for the safety of our community. Never share any personal or private information. Please use the flag button to notify the GotIt! Team of inapporpriate behavior.',
  },
];

export function chatMessages(state = initialState, action) {
  return state;
}
