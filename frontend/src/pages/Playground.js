import { Link } from 'react-router-dom';

function PlaygroundPage() {
  const pages = [
    { to: 'alerts', text: 'Alerts' },
    { to: 'attributes', text: 'Attributes' },
    { to: 'buttons', text: 'Buttons' },
    { to: 'checkbox', text: 'Checkbox' },
    { to: 'downloads', text: 'Downloads' },
    { to: 'dropdowns', text: 'Dropdowns' },
    { to: 'form', text: 'Form' },
    { to: 'iframe', text: 'iFrame' },
    { to: 'radio', text: 'Radio' },
    { to: 'scroll', text: 'Scroll' },
    { to: 'table', text: 'Table' },
    { to: 'text', text: 'Text' },
    { to: 'trigger', text: 'Trigger' },
    { to: 'upload', text: 'Upload' },
  ];

  return (
    <>
      <p>This is a playground meant for testing purposes.</p>
      <h2>UI Testing</h2>
      {pages.map((page, pageIndex) => (
        <div key={pageIndex}>
          <Link to={page.to} data-cy={page.to}>
            {page.text}
          </Link>
        </div>
      ))}
      <h2>API Testing</h2>
      <div>
        <Link to="todo-list" data-cy="todo-list">
          To-Do List
        </Link>
      </div>
    </>
  );
}

export default PlaygroundPage;
