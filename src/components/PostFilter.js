import MyInput from './ui/input/MyInput';
import MySelect from './ui/select/MySelect';

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        value={filter.query}
        placeholder='Search...'
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Sort by'
        options={[
          { value: 'title', name: 'By title' },
          { value: 'body', name: 'By body' },
        ]}
      />
    </div>
  );
}
