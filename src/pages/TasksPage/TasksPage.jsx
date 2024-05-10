import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import { TaskList } from '../../components/TaskList/TaskList';
import { TaskEditor } from '../../components/TaskEditor/TaskEditor';
import { fetchTasks } from '../../redux/tasks/operations';
import { selectIsLoading } from '../../redux/tasks/selectors';

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your tasks</DocumentTitle>
      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </>
  );
}
