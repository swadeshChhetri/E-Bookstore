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

    const fetchData = async () => {
      dispatch(fetchStatusActions.markFetchingStarted());

      try {
        const [booksRes, historyRes, poetryRes, psychologyRes, artsRes, 
        storiesRes, motivationRes] = await Promise.all([
          fetch("https://swadeshchhetri.github.io/bookstore-api/books"),
          fetch("https://swadeshchhetri.github.io/bookstore-api/history"),
          fetch("https://swadeshchhetri.github.io/bookstore-api/poetry"),
          fetch("https://swadeshchhetri.github.io/bookstore-api/psychology"),
          fetch("https://swadeshchhetri.github.io/bookstore-api/arts"),
          fetch("https://swadeshchhetri.github.io/bookstore-api/stories"),
          fetch("https://swadeshchhetri.github.io/bookstore-api/motivation")
        ]);

        if (!booksRes.ok || !historyRes.ok || !poetryRes.ok || !psychologyRes.ok ||
            !artsRes.ok || !storiesRes.ok || !motivationRes.ok) {
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

    };
  }, [fetchStatus, dispatch]);

  return null;
};

export default Fetchbooks;
