import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ITestState, TestModel } from "../../../store/reducers/tests/types"; 
import { fetchTests } from "../../../store/reducers/tests/actions";

const UserHomePage: React.FC = () => {
    const dispatch = useDispatch();
    const tests = useSelector((state: { testReducer: ITestState }) => state.testReducer.tests || []);

    useEffect(() => {
        dispatch(fetchTests() as any);
    }, [dispatch]);

    console.log("Tests from Redux:", tests);

    return (
        <div style={{ padding: "20px" }}>
            <div 
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",  
                    gap: "20px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {tests.length === 0 ? (
                    <p>No tests available</p> 
                ) : (
                    tests.map((test: TestModel) => (
                        <div
                            key={test.id}
                            style={{
                                backgroundColor: "white",
                                height: "200px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                borderRadius: "10px",
                                padding: "20px",
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "2px solid black",
                                cursor: "pointer",
                            }}
                        >
                            <h3 style={{ margin: 0 }}>{test.title}</h3>
                            <p>{test.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default UserHomePage;
