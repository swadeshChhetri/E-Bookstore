import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { booksActions } from "../../store/itemsSlice";
import { fetchStatusActions } from "../../store/fetchStatusSlice";
import { historyActions } from "../../store/history";
import { poetryActions } from "../../store/poetrySlice";
import { psychologyActions } from "../../store/psychologySlice";
import { artsActions } from "../../store/artsSlice";
import { storiesActions } from "../../store/storiesSlice";
import { motivationActions } from "../../store/motivation";

const Fetchbooks = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const fetchData = async () => {
      dispatch(fetchStatusActions.markFetchingStarted());

      try {
        const response = await fetch(
          "https://swadeshchhetri.github.io/bookStore-api/db.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        dispatch(booksActions.addInitialbooks(data.books));
        dispatch(historyActions.addInitialhistory(data.history));
        dispatch(poetryActions.addInitialpoetry(data.poetry));
        dispatch(psychologyActions.addInitialpsychology(data.psychology));
        dispatch(artsActions.addInitialarts(data.arts));
        dispatch(storiesActions.addInitialstories(data.stories));
        dispatch(motivationActions.addInitialmotivation(data.motivation));

        dispatch(fetchStatusActions.markFetchingFinished());
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch(fetchStatusActions.markFetchDone());
      } finally {
        dispatch(fetchStatusActions.markFetchDone());
      }
    };
    fetchData();
    return () => {};
  }, [fetchStatus, dispatch]);
};

export default Fetchbooks;

//The cleanup is mainly used for clearing effects like //*subscriptions or intervals.
