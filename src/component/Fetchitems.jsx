import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { booksActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { historyActions } from "../store/history";
import { poetryActions } from "../store/poetrySlice";
import { psychologyActions } from "../store/psychologySlice";
import { artsActions } from "../store/artsSlice";
import { storiesActions } from "../store/storiesSlice";
import { motivationActions } from "../store/motivation";

const Fetchbooks = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      dispatch(fetchStatusActions.markFetchingStarted());

      try {
        const [booksRes, historyRes, poetryRes, psychologyRes, artsRes, 
storiesRes, motivationRes] = await Promise.all([
          fetch("http://localhost:3006/books", { signal }),
          fetch("http://localhost:3006/history", { signal }),
          fetch("http://localhost:3006/poetry", {signal} ),
          fetch("http://localhost:3006/psychology", {signal}),
          fetch("http://localhost:3006/arts", {signal}),
          fetch("http://localhost:3006/stories", {signal} ),
          fetch("http://localhost:3006/motivation", {signal} )
        ]);

        if (!booksRes.ok || !historyRes.ok || !poetryRes || !psychologyRes ||
!artsRes ||!storiesRes ||!motivationRes) {
          throw new Error("Failed to fetch data");
        }

        const [books, history, poetry, psychology, arts, stories, motivation] = 
await Promise.all([
          booksRes.json(),
          historyRes.json(),
          poetryRes.json(),
          psychologyRes.json(),
          artsRes.json(),
          storiesRes.json(),
          motivationRes.json()
        ]);
        dispatch(booksActions.addInitialbooks(books));
        dispatch(historyActions.addInitialhistory(history));
        dispatch(poetryActions.addInitialpoetry(poetry));
        dispatch(psychologyActions.addInitialpsychology(psychology));
        dispatch(artsActions.addInitialarts(arts)); 
        dispatch(storiesActions.addInitialstories(stories)); 
        dispatch(motivationActions.addInitialmotivation(motivation));

        dispatch(fetchStatusActions.markFetchingFinished());
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch(fetchStatusActions.markFetchDone());
      } finally {
        dispatch(fetchStatusActions.markFetchDone());
      }
    };

    fetchData();

    return () => {
      //controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return null; // or any JSX you want to render
};

export default Fetchbooks;
