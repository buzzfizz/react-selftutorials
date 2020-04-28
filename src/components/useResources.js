import { useEffect, useState } from "react";
import jsonPlacholder from "../api/jsonplaceholder";

const useResources = (resource) => {
	const [resources, setResources] = useState([]);

	useEffect(() => {
		(async (resource) => {
			const response = await jsonPlacholder.get(`/${resource}`);

			setResources(response.data);
		})(resource);
	}, [resource]);

	return resources;
};

export default useResources;
