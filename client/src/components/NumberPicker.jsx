import React from "react";
import Picker from "react-mobile-picker";
import Wrapper from "../assets/Wrappers/NumberPicker";
import { Row, Col } from "react-bootstrap";

const NumberPicker = ({
  unitSystem,
  valueGroups,
  setValueGroups,
  setUnitSystem,
}) => {
  const metricWeight = Array.from({ length: 201 }, (_, i) => `${i} kg`);
  const metricHeight = Array.from({ length: 151 }, (_, i) => `${i + 100} cm`);
  const imperialWeight = Array.from({ length: 501 }, (_, i) => `${i} lbs`);
  const imperialHeightFeet = Array.from({ length: 9 }, (_, i) => `${i} ft`);
  const imperialHeightInches = Array.from({ length: 12 }, (_, i) => `${i} in`);

  const handleUnitSwitch = (system) => {
    if (unitSystem === system) return;

    if (system === "metric") {
      const convertedWeight = Math.round(valueGroups.weight / 2.20462);
      const totalInches =
        valueGroups.heightFeet * 12 + valueGroups.heightInches;
      const convertedHeight = Math.round(totalInches * 2.54);

      setValueGroups({
        ...valueGroups,
        weight: convertedWeight,
        heightCm: convertedHeight,
      });
    } else {
      const convertedWeight = Math.round(valueGroups.weight * 2.20462);
      const totalInches = Math.round(valueGroups.heightCm / 2.54);
      const convertedFeet = Math.floor(totalInches / 12);
      const convertedInches = totalInches % 12;

      setValueGroups({
        ...valueGroups,
        weight: convertedWeight,
        heightFeet: convertedFeet,
        heightInches: convertedInches,
      });
    }

    setUnitSystem(system);
  };

  const handleWeightChange = (name) => {
    const parsedWeight = parseInt(
      name.weight.replace(unitSystem === "metric" ? " kg" : " lbs", ""),
      10
    );
    setValueGroups({ ...valueGroups, weight: parsedWeight });
  };

  const handleHeightChange = (name) => {
    if (unitSystem === "metric") {
      const parsedHeight = parseInt(name.height.replace(" cm", ""), 10);
      setValueGroups({ ...valueGroups, heightCm: parsedHeight });
    } else {
      if (name.heightFeet) {
        const parsedFeet = parseInt(name.heightFeet.replace(" ft", ""), 10);
        setValueGroups({ ...valueGroups, heightFeet: parsedFeet });
      }
      if (name.heightInches) {
        const parsedInches = parseInt(name.heightInches.replace(" in", ""), 10);
        setValueGroups({ ...valueGroups, heightInches: parsedInches });
      }
    }
  };

  return (
    <Wrapper>
      <div>
        {/* Unit System Switch */}
        <div className="unit-switch-buttons">
          <button
            className="button-system-change"
            onClick={() => handleUnitSwitch("metric")}
            disabled={unitSystem === "metric"}
          >
            Metric
          </button>
          <button
            className="button-system-change"
            onClick={() => handleUnitSwitch("imperial")}
            disabled={unitSystem === "imperial"}
          >
            Imperial
          </button>
        </div>

        {/* Unit labels */}
        <div className="unit-labels">
          {unitSystem === "metric" ? (
            <Row>
              <Col>
                <p>kg</p>
              </Col>
              <Col>
                <p>cm</p>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <p>lbs</p>
              </Col>
              <Col>
                <p>ft</p>
              </Col>
              <Col>
                <p>in</p>
              </Col>
            </Row>
          )}
        </div>

        {/* Picker for Weight */}
        <Row
          style={{
            display: "grid",
            gridTemplateColumns:
              unitSystem === "imperial" ? "1fr 1fr 1fr" : "1fr 1fr",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col>
            <Picker
              value={{ weight: `${valueGroups.weight}` }}
              onChange={handleWeightChange}
              className="picker-column"
            >
              <Picker.Column name="weight">
                {(unitSystem === "metric" ? metricWeight : imperialWeight).map(
                  (option) => {
                    const value = option.replace(
                      unitSystem === "metric" ? " kg" : " lbs",
                      ""
                    );
                    return (
                      <Picker.Item
                        key={option}
                        value={value}
                        className="picker-item"
                      >
                        {value}
                      </Picker.Item>
                    );
                  }
                )}
              </Picker.Column>
            </Picker>
          </Col>

          {/* Metric Height Picker */}
          {unitSystem === "metric" && (
            <Col>
              <Picker
                value={{ height: `${valueGroups.heightCm}` }}
                onChange={handleHeightChange}
                className="picker-column"
              >
                <Picker.Column name="height">
                  {metricHeight.map((option) => {
                    const value = option.replace(" cm", "");
                    return (
                      <Picker.Item
                        key={option}
                        value={value}
                        className="picker-item"
                      >
                        {value}
                      </Picker.Item>
                    );
                  })}
                </Picker.Column>
              </Picker>
            </Col>
          )}

          {/* Imperial Height Pickers */}
          {unitSystem === "imperial" && (
            <>
              <Col>
                <Picker
                  value={{ heightFeet: `${valueGroups.heightFeet}` }}
                  onChange={handleHeightChange}
                  className="picker-column"
                >
                  <Picker.Column name="heightFeet">
                    {imperialHeightFeet.map((option) => {
                      const value = option.replace(" ft", "");
                      return (
                        <Picker.Item
                          key={option}
                          value={value}
                          className="picker-item"
                        >
                          {value}
                        </Picker.Item>
                      );
                    })}
                  </Picker.Column>
                </Picker>
              </Col>
              <Col>
                <Picker
                  value={{ heightInches: `${valueGroups.heightInches}` }}
                  onChange={handleHeightChange}
                  className="picker-column"
                >
                  <Picker.Column name="heightInches">
                    {imperialHeightInches.map((option) => {
                      const value = option.replace(" in", "");
                      return (
                        <Picker.Item
                          key={option}
                          value={value}
                          className="picker-item"
                        >
                          {value}
                        </Picker.Item>
                      );
                    })}
                  </Picker.Column>
                </Picker>
              </Col>
            </>
          )}
        </Row>
      </div>
    </Wrapper>
  );
};

export default NumberPicker;
