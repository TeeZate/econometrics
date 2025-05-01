import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const GraphSection = () => {
  const [activePeriod, setActivePeriod] = useState('1w');

  // Sample data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Market Performance',
      data: [65, 59, 80, 81, 56, 55, 72],
      fill: true,
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
      borderColor: 'rgba(0, 123, 255, 1)',
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: 'rgba(0, 123, 255, 1)',
      pointBorderColor: '#fff',
      pointHoverRadius: 6
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  };

  const handlePeriodChange = (period) => {
    setActivePeriod(period);
    console.log('Selected period:', period);
    // Here you would typically update the chart data based on the selected period
  };

  const marketStats = [
    { 
      title: 'Market Cap', 
      value: '$2.4T', 
      trend: '+2.4%', 
      status: 'success', 
      message: 'Up from last month',
      icon: 'bi-arrow-up-right'
    },
    { 
      title: 'Volume 24h', 
      value: '$48.8B', 
      trend: '-1.2%', 
      status: 'danger', 
      message: 'Down from yesterday',
      icon: 'bi-arrow-down-right'
    },
    { 
      title: 'Volatility', 
      value: '12.4%', 
      trend: 'Normal', 
      status: 'primary', 
      message: 'Stable conditions',
      icon: 'bi-dash'
    }
  ];

  return (
    <section className="graph-section py-5">
      <Container>
        <Row className="mb-4">
          <Col lg={8}>
            <h2 className="section-title">Market Performance</h2>
            <p className="section-subtitle">Real-time financial insights and market trends</p>
          </Col>
          <Col lg={4}>
            <div className="graph-controls">
              {['1w', '1m', '3m', '1y'].map(period => (
                <Button 
                  key={period}
                  className={`btn-outline-primary ${activePeriod === period ? 'active' : ''}`}
                  data-period={period}
                  onClick={() => handlePeriodChange(period)}
                >
                  {period.toUpperCase()}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={8}>
            <div className="graph-card">
              <div style={{ height: '400px' }}>
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="stats-container">
              {marketStats.map((stat, index) => (
                <div className="stat-card" key={index}>
                  <div className="stat-header">
                    <h4>{stat.title}</h4>
                    <span className={`badge bg-${stat.status}`}>{stat.trend}</span>
                  </div>
                  <p className="stat-value">{stat.value}</p>
                  <div className="stat-trend">
                    <small className={`text-${stat.status}`}>
                      <i className={`bi ${stat.icon}`}></i> 
                      {stat.message}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GraphSection;
