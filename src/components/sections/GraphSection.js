import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const GraphSection = () => {
  const [activePeriod, setActivePeriod] = useState('1w');
  const [chartDimensions, setChartDimensions] = useState({ width: '100%', height: 300 });
  const [isLoading, setIsLoading] = useState(false);

  // Handle period change
  const handlePeriodChange = async (period) => {
    setActivePeriod(period);
    setIsLoading(true);
    try {
      // Here you would typically fetch data based on the period
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsLoading(false);
    } catch (error) {
      console.error('Error updating period:', error);
      setIsLoading(false);
    }
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setChartDimensions({
        width: '100%',
        height: isMobile ? 250 : 400
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      pointRadius: window.innerWidth < 768 ? 2 : 4,
      pointBackgroundColor: 'rgba(0, 123, 255, 1)',
      pointBorderColor: '#fff',
      pointHoverRadius: window.innerWidth < 768 ? 4 : 6
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#000',
        bodyColor: '#666',
        borderColor: '#ddd',
        borderWidth: 1,
        displayColors: false,
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 12
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 12
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
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
      value: '$86.2B',
      trend: '-1.2%',
      status: 'danger',
      message: 'Down from yesterday',
      icon: 'bi-arrow-down-right'
    },
    {
      title: 'Dominance',
      value: '42.8%',
      trend: '+0.8%',
      status: 'success',
      message: 'Increasing trend',
      icon: 'bi-arrow-up-right'
    },
    {
      title: 'Gas Price',
      value: '25 Gwei',
      trend: '-5%',
      status: 'success',
      message: 'Lower than average',
      icon: 'bi-arrow-down-right'
    }
  
  ];

  return (
    <section className="graph-section py-3 py-md-5">
      <Container fluid="lg">
        <Row className="mb-3 mb-md-4">
          <Col xs={12} lg={8} className="mb-3 mb-lg-0">
            <h2 className="section-title h4 h3-md">Market Performance</h2>
            <p className="section-subtitle small text-muted d-none d-sm-block">
              Real-time financial insights and market trends
            </p>
          </Col>
          <Col xs={12} lg={4}>
            <div className="graph-controls d-flex justify-content-start justify-content-lg-end">
              {['1w', '1m', '3m', '1y'].map(period => (
                <Button 
                  key={period}
                  size={window.innerWidth < 768 ? 'sm' : 'md'}
                  className={`me-2 ${activePeriod === period ? 'active' : ''}`}
                  variant="outline-primary"
                  onClick={() => handlePeriodChange(period)}
                >
                  {period.toUpperCase()}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={8} className="mb-4 mb-lg-0">
            <div className="graph-card p-2 p-md-3 bg-white rounded shadow-sm">
              <div style={{ height: chartDimensions.height }}>
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className="stats-container">
              {marketStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-card p-3 mb-3 bg-white rounded shadow-sm"
                >
                  <div className="stat-header d-flex justify-content-between align-items-center">
                    <h4 className="h6 mb-0">{stat.title}</h4>
                    <span className={`badge bg-${stat.status}`}>
                      {stat.trend}
                    </span>
                  </div>
                  <p className="stat-value h4 my-2">{stat.value}</p>
                  <div className="stat-trend">
                    <small className={`text-${stat.status} d-flex align-items-center`}>
                      <i className={`bi ${stat.icon} me-1`}></i>
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

// Add corresponding CSS
const styles = `
  .graph-section {
    background-color: #f8f9fa;
  }

  .graph-card {
    transition: all 0.3s ease;
  }

  .stat-card {
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
  }

  @media (max-width: 767.98px) {
    .section-title {
      font-size: 1.25rem;
    }

    .graph-controls {
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 0.5rem;
    }

    .stat-card {
      margin-bottom: 0.75rem;
    }
  }

  @media (min-width: 768px) {
    .graph-card {
      padding: 1.5rem;
    }

    .stat-card {
      margin-bottom: 1rem;
    }
  }
`;

export default GraphSection;
