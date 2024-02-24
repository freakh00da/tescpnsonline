export default function Divider(props) {
  const title = props.data;
  return (
    <span className='relative flex justify-center my-6'>
      <div className='absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75'></div>

      <span className='relative bg-gray-100 px-6'>{title}</span>
    </span>
  );
}
