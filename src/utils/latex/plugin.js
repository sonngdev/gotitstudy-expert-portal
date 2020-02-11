/* eslint-disable */

tinymce.PluginManager.add('latex', function (editor, url) {
  const latexClass = 'Latexformula';
  const isLatexFormula = (node) => [...node.classList].includes(latexClass);

  const openDialog = () => {
    const { selection } = editor;
    const node = selection && selection.getNode();
    const selectedExpression = node && isLatexFormula(node) ? node.alt : '';

    editor.windowManager.open({
      title: 'LaTeX expression',
      body: {
        type: 'panel',
        items: [
          { type: 'input', name: 'expression', label: 'Expression' },
        ],
      },
      buttons: [
        { type: 'cancel', text: 'Close' },
        { type: 'submit', text: 'Save', primary: true },
      ],
      initialData: {
        expression: selectedExpression,
      },
      onSubmit({ getData, close }) {
        const { expression } = getData();
        /**
         * LaTeX Math as SVG image
         * https://math.now.sh/home
         */
        const src = `https://math.now.sh?from=${encodeURIComponent(expression)}`;
        const content = `<img class="${latexClass}" src="${src}" alt="${expression}" role="math"/>`;
        editor.insertContent(content);
        close();
      },
    });
  }

  editor.ui.registry.addButton('latex', {
    text: 'LaTeX',
    onAction: openDialog,
  });

  editor.ui.registry.addMenuItem('latex', {
    text: 'LaTeX',
    onAction: openDialog,
  });

  editor.on('DblClick', ({ target }) => {
    if (isLatexFormula(target)) openDialog();
  });

  return {
    getMetadata: () => ({ name: 'LaTeX plugin for tinymce 5' }),
  };
})
