// 
import React, { useEffect, useRef, useState } from 'react';
import * as go from 'gojs';
import GCP_SERVICES from '../data/gcpServices';
import GCP_TOOLTIPS from '../data/gcpTooltips';
import { ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

const GCPMindMap = () => {
  const divRef = useRef(null);
  const diagramRef = useRef(null);
  const [tooltip, setTooltip] = useState({ text: "", x: 0, y: 0, visible: false });

  useEffect(() => {
    if (!divRef.current) return;

    const $ = go.GraphObject.make;
    const myDiagram = $(go.Diagram, divRef.current, {
      initialContentAlignment: go.Spot.Center,
      layout: $(go.TreeLayout, {
        angle: 0,
        layerSpacing: 100,
        nodeSpacing: 30,
        alignment: go.TreeLayout.AlignmentCenterChildren,
        arrangement: go.TreeLayout.ArrangementHorizontal,
        layerStyle: go.TreeLayout.LayerUniform
      }),
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
      "draggingTool.isEnabled": true,
      "panningTool.isEnabled": true,
      allowHorizontalScroll: true,
      allowVerticalScroll: true,
      "animationManager.isEnabled": true,
      "undoManager.isEnabled": true,
      maxSelectionCount: 1,
      "draggingTool.dragsTree": true,
      initialAutoScale: go.Diagram.Uniform,
      padding: 50,
      contentAlignment: go.Spot.Center,
      "grid.visible": true,
      "grid.gridCellSize": new go.Size(50, 50)
    });

    // Node template
    myDiagram.nodeTemplate = $(
      go.Node, "Auto",
      {
        selectionAdorned: true,
        shadowVisible: true,
        shadowOffset: new go.Point(3, 3),
        shadowBlur: 5,
        // Handle mouse events for tooltips
        mouseEnter: (e, node) => {
          const tooltip = GCP_TOOLTIPS[node.data.key];
          if (tooltip) {
            const doc = node.diagram.div;
            const pos = node.diagram.transformDocToView(node.location);
            const bbox = node.actualBounds;

            setTooltip({
              text: tooltip,
              x: pos.x + doc.offsetLeft + bbox.width + 10,
              y: pos.y + doc.offsetTop + (bbox.height / 2),
              visible: true
            });
          }
          // Handle shadow animation
          const shape = node.findObject("SHAPE");
          if (shape) {
            shape.shadowBlur = 10;
            shape.shadowOffset = new go.Point(5, 5);
          }
        },
        mouseLeave: (e, node) => {
          setTooltip(prev => ({ ...prev, visible: false }));
          // Reset shadow animation
          const shape = node.findObject("SHAPE");
          if (shape) {
            shape.shadowBlur = 5;
            shape.shadowOffset = new go.Point(3, 3);
          }
        }
      },
      $(go.Shape, "RoundedRectangle",
        {
          name: "SHAPE",
          fill: "white",
          strokeWidth: 2,
          shadowVisible: true,
          portId: "",
          cursor: "pointer",
          minSize: new go.Size(150, 50)
        },
        new go.Binding("fill", "color")),
      $(go.TextBlock,
        {
          margin: 12,
          font: "bold 14px Arial",
          textAlign: "center",
          width: 160,
          wrap: go.TextBlock.WrapFit,
          maxLines: 3,
          stroke: "white",
        },
        new go.Binding("text")),

    );

    // Link template
    myDiagram.linkTemplate = $(
      go.Link,
      {
        routing: go.Link.Orthogonal,
        corner: 5,
        selectable: false
      },
      $(go.Shape,
        {
          strokeWidth: 2,
          stroke: "#555"
        }),
      $(go.Shape,
        {
          toArrow: "Standard",
          stroke: "#555",
          fill: "#555"
        })
    );

    myDiagram.model = new go.TreeModel(GCP_SERVICES);
    diagramRef.current = myDiagram;

    // Center and fit the diagram with a slight delay
    setTimeout(() => {
      myDiagram.zoomToFit();
      myDiagram.contentAlignment = go.Spot.Center;
      myDiagram.scale = 0.8;
      const documentBounds = myDiagram.documentBounds;
      myDiagram.centerRect(documentBounds);
    }, 100);

    return () => {
      myDiagram.div = null;
    };
  }, []);

  const handleZoomIn = () => {
    if (diagramRef.current) {
      diagramRef.current.commandHandler.increaseZoom();
    }
  };

  const handleZoomOut = () => {
    if (diagramRef.current) {
      diagramRef.current.commandHandler.decreaseZoom();
    }
  };

  const handleResetView = () => {
    if (diagramRef.current) {
      diagramRef.current.scale = 0.8;
      diagramRef.current.contentAlignment = go.Spot.Center;
      diagramRef.current.zoomToFit();
      const documentBounds = diagramRef.current.documentBounds;
      diagramRef.current.centerRect(documentBounds);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full bg-white rounded-lg shadow-lg relative">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex gap-2">
          <button
            onClick={handleZoomIn}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={handleResetView}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            title="Reset View"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        ref={divRef}
        className="w-full h-[800px] border border-gray-200 rounded-lg"
        style={{
          backgroundColor: '#ffffff',
          cursor: 'move'
        }}
      />
      {tooltip.visible && (
        <div
          className="absolute bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-md"
          style={{
            left: tooltip.x + 'px',
            top: tooltip.y + 'px',
            transform: 'translateY(-50%)',
            zIndex: 1000
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default GCPMindMap;